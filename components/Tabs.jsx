import { Tabs } from "flowbite-react";

export default function TabsFlowBite() {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <Tabs.Group aria-label="Default tabs" style="default">
          <Tabs.Item active={true} title="Floor Plans">
            Floor Plans
          </Tabs.Item>
          <Tabs.Item title="Site Map">Site Map</Tabs.Item>
          <Tabs.Item title="Virtual Tours">Virtual Tours</Tabs.Item>
          <Tabs.Item title="Neighbourhood">Neighbourhood</Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}
