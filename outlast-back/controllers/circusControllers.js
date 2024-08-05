import Circus from "../models/circus.js";
import HttpError from "../helpers/HttpError.js";
import { createContactSchema } from "../schemas/contactsSchemas.js";
import "dotenv/config";
import nodemailer from "nodemailer";

const { UKR_NET_EMAIL, UKR_NET_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const questName = "Цирк ужасов";
const questAdres = "Переулок Нихимова 6"

export const getAllContacts = async (req, res, next) => {
  try {
    const result = await Circus.find();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getOneContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Circus.findById({ _id: id });
    console.log(result);
    if (!result) {
      throw HttpError(404, `Contact with ${id} not found`);
    }
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const result = await Circus.findByIdAndDelete(req.params.id);
    if (!result) {
      throw HttpError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const createContact = async (req, res, next) => {
  try {
    if (!Object.keys(req.body).length) {
      throw HttpError(400, "all fields empty");
    }
    const { error } = createContactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await Circus.create(req.body);
    res.status(202).json(result);

    const sendAdminEmail = {
      from: UKR_NET_EMAIL,
      to: "outlast.quest@gmail.com",
      subject: "Reservation",
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #333;">Привет, Катя. Радику привет. Вот бронь:</h2>
      <p style="font-size: 16px; color: #333;">Название квеста:<strong>${questName}</strong></p>
      <p style="font-size: 16px; color: #333;">Стоимость игры: <strong>${req.body.price}</strong></p>
      <p style="font-size: 16px; color: #333;">Колчиество игроков: <strong>${req.body.players}</strong></p>
      <p style="font-size: 16px; color: #333;">Время и дата: <strong>${req.body.reserved}</strong></p>
      <p style="font-size: 16px; color: #333;">Телефон клиента: <strong>${req.body.phone}</strong></p>
      <p style="font-size: 16px; color: #333;">Email: <strong>${req.body.mail}</strong></p>
      <p style="font-size: 16px; color: #333;">Хорошего дня!</p>
    </div>
  `,
    };

    const sendUserEmail = {
      from: UKR_NET_EMAIL,
      to: `${req.body.mail}`,
      subject: "Outlast-reservation",
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #333;">Вы успешно забронировали квест ${questName}</h2>
      <p style="font-size: 16px; color: #333;">Будем ждать вас: <strong>${req.body.reserved}</strong> по адресу: <strong>${questAdres}</strong></p>
      <p style="font-size: 16px; color: #333;">Стоимость игры: <strong>${req.body.price}</strong>, количество игроков: <strong>${req.body.players}</strong></p>
      <p style="font-size: 16px; color: #333;">Номер администратора: <strong>+380 99 516 91 66</strong></p>
      <p style="font-size: 16px; color: #333;">Предоплату можно будет внести связавшись с администратором.</p>
      <p style="font-size: 16px; color: #333;">До встречи на игре!</p>
    </div>
  `,
    };

    transport
      .sendMail(sendAdminEmail)
      .then(() => console.log("Email to admin sent successfully"))
      .catch((error) =>
        console.log(`Failed to send email to admin: ${error.message}`)
      );

    transport
      .sendMail(sendUserEmail)
      .then(() => console.log("Email to user sent successfully"))
      .catch((error) =>
        console.log(`Failed to send email to user: ${error.message}`)
      );
  } catch (error) {
    next(error);
  }
};

export const updateContact = async (req, res, next) => {
  try {
    if (!Object.keys(req.body).length) {
      throw HttpError(400, "all fields empty");
    }
    const { error } = createContactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { id } = req.params;
    const result = await Circus.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!result) {
      throw HttpError(404);
    }
    res.status(202).json(result);
  } catch (error) {
    next(error);
  }
};
