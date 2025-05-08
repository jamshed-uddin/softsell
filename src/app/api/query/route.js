import aiResponse from "@/utils/aiResponse";

export async function POST(request) {
  const body = await request.json();

  console.log(body);

  await aiResponse();

  return new Response(
    { message: "hello world" },
    {
      status: 201,
    }
  );
}
