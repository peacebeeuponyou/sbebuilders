import { getDB } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function EnquiriesPage() {
  const db = await getDB();
  const enquiries = db.enquiries;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-heading">Enquiries</h1>
        <p className="text-muted-foreground">Messages from your contact form.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Messages</CardTitle>
        </CardHeader>
        <CardContent>
          {enquiries.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No enquiries yet.
            </div>
          ) : (
            <div className="rounded-md border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="h-12 px-4 text-left font-medium">Date</th>
                    <th className="h-12 px-4 text-left font-medium">Name</th>
                    <th className="h-12 px-4 text-left font-medium">Email</th>
                    <th className="h-12 px-4 text-left font-medium">Message</th>
                    <th className="h-12 px-4 text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((enq: any) => (
                    <tr key={enq.id} className="border-b last:border-0 hover:bg-muted/50">
                      <td className="p-4 whitespace-nowrap text-muted-foreground">
                        {new Date(enq.date).toLocaleDateString()}
                      </td>
                      <td className="p-4 font-medium">{enq.name}</td>
                      <td className="p-4">{enq.email}</td>
                      <td className="p-4 max-w-xs truncate" title={enq.message}>{enq.message}</td>
                      <td className="p-4">
                        <Badge variant={enq.status === "new" ? "default" : "secondary"}>
                          {enq.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
