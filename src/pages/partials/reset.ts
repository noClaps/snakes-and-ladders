import { position } from "../../scripts/position";

export async function POST() {
    position.set(0);
    return new Response(null, {
        status: 204
    });
}
