import React from "react";

export default function CsoportokPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
                <h1 className="text-3xl font-bold text-purple-700 mb-4">Csoportok</h1>
                <p className="text-lg text-gray-700 mb-6">
                    A csoportok szervezés alatt vannak.<br />
                    Kérjük, nézz vissza később!
                </p>
                <span className="inline-block animate-bounce text-4xl text-purple-400">⏳</span>
            </div>
        </div>
    );
}