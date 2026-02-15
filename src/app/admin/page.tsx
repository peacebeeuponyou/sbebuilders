import { getDB } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Briefcase, MessageSquare, Users } from "lucide-react";

export default async function AdminDashboard() {
  const db = await getDB();
  
  const stats = [
    { title: "Total Blog Posts", value: db.blogs.length, icon: FileText, color: "text-blue-500" },
    { title: "Active Projects", value: db.projects.length, icon: Briefcase, color: "text-green-500" },
    { title: "Enquiries", value: db.enquiries.length, icon: MessageSquare, color: "text-orange-500" },
    { title: "Services", value: db.services.length, icon: Users, color: "text-purple-500" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-heading text-slate-900 dark:text-white">Dashboard Overview</h1>
        <p className="text-slate-500">Welcome back to the SBE Builders Admin Panel.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Recent Enquiries</CardTitle>
          </CardHeader>
          <CardContent>
            {db.enquiries.length === 0 ? (
              <p className="text-sm text-muted-foreground">No enquiries yet.</p>
            ) : (
              <ul className="space-y-4">
                {db.enquiries.slice(0, 5).map((enq: any, i: number) => (
                  <li key={i} className="flex justify-between items-center border-b pb-2 last:border-0">
                    <div>
                      <p className="font-medium">{enq.name}</p>
                      <p className="text-xs text-muted-foreground">{enq.email}</p>
                    </div>
                    <span className="text-xs text-slate-400">{new Date(enq.date).toLocaleDateString()}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Recent Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {db.blogs.slice(0, 5).map((blog: any) => (
                <li key={blog.id} className="flex justify-between items-center border-b pb-2 last:border-0">
                  <span className="font-medium truncate max-w-[200px]">{blog.title}</span>
                  <span className="text-xs text-slate-400">{blog.date}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
