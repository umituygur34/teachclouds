import Instructors from "@/components/about/instructors";
import Welcome from "@/components/about/welcome";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageHeader title={"About"}></PageHeader>
      <Spacer></Spacer>
      <Welcome></Welcome>
      <Spacer></Spacer>
      <Instructors></Instructors>
      <Spacer></Spacer>
    </>
  );
};

export default AboutPage;
