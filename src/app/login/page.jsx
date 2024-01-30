import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import LoginForm from "@/components/login/login-form";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <PageHeader></PageHeader>
      <Spacer height={50}></Spacer>
      <LoginForm></LoginForm>
    </div>
  );
};

export default LoginPage;
