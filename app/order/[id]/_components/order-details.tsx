import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"

export default function OrderDetails() {
  return (
    <div className="grid items-start max-w-6xl gap-6 px-4 py-6 mx-auto md:grid-cols-2 lg:gap-12">
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="flex items-center justify-between">
              <span>Order #</span>
              <span className="font-medium">3102</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Order Date</span>
              <span className="font-medium">June 23, 2022</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Total</span>
              <span className="font-medium">$150.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Payment Method</span>
              <span className="font-medium">Visa *1234</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Shipping Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div>
              <p className="font-medium">Sophia Anderson</p>
              <p>1234 Main St.</p>
              <p>Anytown, CA 12345</p>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping Method</span>
              <span className="font-medium">Standard Shipping</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Estimated Delivery</span>
              <span className="font-medium">June 27, 2022</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Items</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px] hidden md:table-cell">Image</TableHead>
                  <TableHead className="max-w-[150px]">Name</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="hidden md:table-cell">
                    <img
                      alt="Product image"
                      className="object-cover rounded-md aspect-square"
                      height="64"
                      src="/placeholder.svg"
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">Glimmer Lamps</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>$120.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="hidden md:table-cell">
                    <img
                      alt="Product image"
                      className="object-cover rounded-md aspect-square"
                      height="64"
                      src="/placeholder.svg"
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">Aqua Filters</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>$49.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Order Total</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>$169.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Taxes</span>
              <span>$0.00</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between font-medium">
              <span>Total</span>
              <span>$150.00</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
