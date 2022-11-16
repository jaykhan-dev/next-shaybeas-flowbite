import { Tabs } from "flowbite-react";

export default function TabsFlowBite() {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <Tabs.Group aria-label="Default tabs" style="default">
          <Tabs.Item active={true} title="Profile">
            Profile content
          </Tabs.Item>
          <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
          <Tabs.Item title="Settings">Settings content</Tabs.Item>
          <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}
