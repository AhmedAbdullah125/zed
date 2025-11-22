import { t } from '@/lib/i18n';
import Link from 'next/link';
import React from 'react';


export default function BreadCrumb({ first, firstLink, second, secondLink}) {
    return (

        <section className="breadcrumb-sec">
            <div className="container">
                <ul className="breadcrumb">
                    <li className="breadcrumb-li">
                        <Link className="breadcrumb-a" href="/">الرئيسية</Link>
                    </li>
                    {
                        first ?
                            <>
                                <li className="breadcrumb-li">
                                    <Link href={firstLink} className="breadcrumb-a"> {first}</Link>
                                </li>
                                {
                                    second ? <li className="breadcrumb-li">
                                        <Link href={secondLink} className="breadcrumb-a">{second}</Link>
                                    </li> : null
                                }
                            </>
                            : null
                    }
                </ul>
            </div>

        </section>

    );
}

