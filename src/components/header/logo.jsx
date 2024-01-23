import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <a className="navbar-brand" as={Link} href="/" title={config.project.name}>
      <Image
        src="/images/logo/logo-multi.png"
        width={208}
        height={48}
        alt={config.project.name}></Image>
    </a>
  );
};

export default Logo;
