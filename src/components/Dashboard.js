import React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";

const Dashboard = () => {
  return (
    <Card>
      <CardHeader title="Welcome to the admin page."></CardHeader>
      <CardContent>
        By default, react-admin displays the list page of the first Resource
        element as home page. If you want to display a custom component instead,
        pass it in the dashboard prop of the component.
      </CardContent>
    </Card>
  );
};

export default Dashboard;
