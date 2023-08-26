import { NextResponse } from "next/server";
import { pool } from "../../../../config/db";

export const POST = async (req) => {
  try {
    const { firstName, lastName, email, password, phone } = await req.json();
    console.log(firstName, lastName, email, password);

    const results = await pool.query(" insert into users set ?", {
      firstName,
      lastName,
      email,
      password,
      phone,
    });
    return NextResponse.json({
      firstName,
      lastName,
      email,
      password,
      phone,
      id: results.insertId,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
