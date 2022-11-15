import { Tabs } from "flowbite-react";

export default function TabsFlowBite() {
  return (
    <div className="flex justify-center">
      <div className="lg:w-2/3">
        <Tabs.Group aria-label="Full width tabs" style="fullWidth">
          <Tabs.Item title="Profile">Profile content</Tabs.Item>
          <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
          <Tabs.Item title="Settings">Settings content</Tabs.Item>
          <Tabs.Item title="Invoice">Invoice content</Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}
