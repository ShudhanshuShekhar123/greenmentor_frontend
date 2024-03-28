import React, { useState } from 'react';

const Taskpage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const title = formData.get('title');
        const description = formData.get('description');
        console.log('Title:', title, 'Description:', description);
        // You can perform further actions like sending the data to a server here
        setIsOpen(false); // Close the modal after form submission
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const stopPropagation = (e) => {
        e.stopPropagation(); // Prevent clicks on the modal from closing it
    };

    return (
        <div className="mt-6">
            {isOpen && (
                <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-full bg-gray-800 bg-opacity-50" onClick={closeModal}>
                    <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg" onClick={stopPropagation}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Create New Task</h3>
                            <button
                                type="button"
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                onClick={closeModal}>
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-start text-gray-900">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter title"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium  text-start text-gray-900">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows="4"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter task description"
                                    required
                                />
                            </div>
                            <button
                                
                                onClick={handleSubmit}
                                className="w-full bg-blue-500 text-white rounded-md py-2 px-4 font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                             Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <button
                type="button"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-auto"
                onClick={() => setIsOpen(true)}>
               Create a new Task
            </button>
        </div>
    );
};

export default Taskpage;
