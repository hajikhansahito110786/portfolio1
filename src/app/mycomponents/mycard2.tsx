import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Education } from "./education"
import { Skills } from "./skills"
import { Project } from "./project"

export function TabsDemo() {
  return (
    <Tabs defaultValue="education" className="w-[400px] ">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="project">Project</TabsTrigger>
      </TabsList>
      <TabsContent value="education">
        <Education/>
      </TabsContent>

      <TabsContent value="skills">
        <Skills/>
      </TabsContent>

      <TabsContent value="project">
        <Project/>
      </TabsContent>

    </Tabs>
  )
}
