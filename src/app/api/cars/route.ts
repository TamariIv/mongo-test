import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectDatabase, insertDocument, getAllDocuments, updateDocument, deleteDocument } from "@/services/mongo";

export async function GET(request: Request) {
    const client = await connectDatabase();
    const cars = await getAllDocuments(client, 'cars');
    client.close();
    return NextResponse.json(cars);
}

export async function POST(request: Request) {
    const client = await connectDatabase();
    const data = await request.json();

    try {
        const result = await insertDocument(client, "cars", data);
        return NextResponse.json({ message: "Car added!", carId: result.insertedId });
    } catch (error) {
        return NextResponse.json({ message: "Failed to add car." }, { status: 500 });
    }
}


export async function PUT(request: Request) {
    const client = await connectDatabase();
    const { id, ...updateData } = await request.json();

    try {
        const result = await updateDocument(client, "cars", { _id: new ObjectId(String(id)) }, updateData);
        if (result.modifiedCount === 0) {
            return NextResponse.json({ message: "Car not found." }, { status: 404 });
        }
        return NextResponse.json({ message: "Car updated!" });
    } catch (error) {
        return NextResponse.json({ message: "Failed to update car." }, { status: 500 });
    }
}

// DELETE a car
export async function DELETE(request: Request) {
    const db = await connectDatabase();
    const { id } = await request.json();

    try {
        const result = await deleteDocument(db, "cars", { _id: new ObjectId(String(id)) });
        if (result.deletedCount === 0) {
            return NextResponse.json({ message: "Car not found." }, { status: 404 });
        }
        return NextResponse.json({ message: "Car deleted!" });
    } catch (error) {
        return NextResponse.json({ message: "Failed to delete car." }, { status: 500 });
    }
}