import React from 'react';
import Discribe from './Discribe';

function Page6() {
    const arr = [
        {
            "img": "https://th.bing.com/th/id/OIP.5Nj21arb8WQXnFkEFsRNyAHaFu?w=257&h=198&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "dark": "Foundational Math",
            "body": "Build your foundational skills in algebra, geometry, and probability"
        },
        {
            "img": "https://th.bing.com/th/id/OIP.GABd1OwlEvphT3FJWbA9-wHaG_?w=215&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "dark": "Mathmatical Thinking",
            "body": "Build your foundational skills in algebra, geometry, and probability "
        }
    ];

    return (
        <div className='py-[50px]'>
            <Discribe
                title="Learning paths based on your answer"
                desc="Choose one to get started. You can switch anytime"
            />

            <div className="flex flex-col items-center justify-center">
                {arr.map((element, index) => (
                    <div key={index} className="h-[250px] w-[500px] bg-white border border-black border-inherit rounded-lg overflow-hidden hover:border-yellow-500 hover:shadow-lg my-4">
                        <div className="p-[25px]">
                            <div className="flex">
                                <div className="pr-[10px]">
                                    <img src={element.img} alt="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal">{element.dark}</h2>
                                    <h2 className="text-gray-500">{element.body}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page6;

