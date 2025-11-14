import React from "react";
import Image from "next/image";
import instagramImg from "@/src/images/share-img.png";
export default function Instagram() {
    return (
        <div className="share-section">
            <div className="container">
                <h2 className="section-title">انشر صورك وقم بالإشارة إلينا على Instgram</h2>
                <div className="grid-cont">
                    <div className="share-item">
                        <figure>
                            <Image src={instagramImg} alt="insta-img" />
                        </figure>
                    </div>
                    <div className="share-item">
                        <figure>
                            <Image src={instagramImg} alt="insta-img" />
                        </figure>
                    </div>
                    <div className="share-item">
                        <figure>
                            <Image src={instagramImg} alt="insta-img" />
                        </figure>
                    </div>
                    <div className="share-item">
                        <figure>
                            <Image src={instagramImg} alt="insta-img" />
                        </figure>
                    </div>
                    <div className="share-item">
                        <figure>
                            <Image src={instagramImg} alt="insta-img" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
