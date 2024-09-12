import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  //* look at App for a route definition Button action is asociated with Order as an action
  const fetcher = useFetcher();
  return (
    //* helps to refetch some data without causing a navigation
    <fetcher.Form method="PATCH" className="space-x-2 text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrder;
