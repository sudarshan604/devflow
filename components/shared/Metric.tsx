import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MetricProps {
  imgUrl: string;
  alt: string;
  title: string;
  value: string | number;
  href?: string;
  textStyles: string;
  isAuthor?: Boolean;
}

const Metric = ({
  imgUrl,
  alt,
  title,
  href,
  value,
  textStyles,
  isAuthor,
}: MetricProps) => {
  const MetricContext = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : " "}`}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {MetricContext}
      </Link>
    );
  }

  return <div className="flex-center flex-wrap gap-1">{MetricContext}</div>;
};

export default Metric;
