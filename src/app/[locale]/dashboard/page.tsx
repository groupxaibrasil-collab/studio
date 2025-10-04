import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-headline text-3xl font-bold md:text-4xl">
          Welcome back, Leandro!
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s a quick overview of your creative workspace.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Start a New Project</CardTitle>
            <CardDescription>
              Ready to bring a new idea to life?
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col items-center justify-center text-center">
            <PlusCircle className="w-16 h-16 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Click the button below to start a new book, script, or comic.
            </p>
            <Button size="lg">New Project</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>
              Jump back into your ongoing work.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Cyberpunk Dystopia</h3>
                  <p className="text-sm text-muted-foreground">Novel - 15 Chapters</p>
                </div>
                <Button variant="secondary" size="sm">Continue</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">The Last Stand</h3>
                  <p className="text-sm text-muted-foreground">Screenplay - Act 2</p>
                </div>
                <Button variant="secondary" size="sm">Continue</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Chronicles of the Void</h3>
                  <p className="text-sm text-muted-foreground">Comic - Issue #3</p>
                </div>
                <Button variant="secondary" size="sm">Continue</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Credit Usage</CardTitle>
            <CardDescription>
              Your current monthly balance.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
             <div className="text-5xl font-bold text-primary">3,450</div>
             <p className="text-sm text-muted-foreground mt-2">of 5,000 credits remaining</p>
             <div className="w-full bg-muted rounded-full h-2.5 mt-4">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '69%' }}></div>
            </div>
             <Button variant="link" className="mt-4">Upgrade Plan</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
