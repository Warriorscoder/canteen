"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div className="grid grid-cols-2 ">

                <CardContainer className="inter-var">
                    <CardBody className=" relative group/card  hover:shadow-xl dark:hover:shadow-emerald-50/[0.1] bg-transparent   w-auto sm:w-[30rem] h-auto rounded-xl    ">

                        <CardItem translateZ="100" className="w-full ">
                            <Image
                                src={'/temp.png'}
                                height="1000"
                                width="1000"
                                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>

                    </CardBody>
                </CardContainer>
                <div>
                        <p className="mt-32">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa libero sint ab assumenda maiores ducimus repudiandae eos? Quibusdam in impedit nostrum commodi minus consequatur error fugiat qui architecto unde, sit blanditiis neque. Deserunt quae mollitia dignissimos animi soluta fuga delectus itaque expedita odio! Quia eveniet exercitationem voluptate dolorem, quam esse facere deleniti itaque voluptatem magni alias. Veritatis architecto vitae aliquid voluptatibus, commodi cum facilis obcaecati facere consequuntur laudantium nemo reiciendis eaque, iusto dolor non quos enim velit quisquam corporis! Voluptates iste quos aspernatur error expedita alias, mollitia accusamus voluptate. Inventore debitis culpa omnis officiis assumenda et dolorum mollitia maiores?</p>
                </div>
            </div>
        </>
    );
}
