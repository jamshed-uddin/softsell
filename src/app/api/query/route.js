import aiResponse from "@/utils/aiResponse";

export async function POST(request) {
  try {
    const { userQuery } = await request.json();

    if (!userQuery?.trim()) {
      return new Response(
        JSON.stringify({
          message: "Please provide a user query",
        }),
        {
          status: 400,
        }
      );
    }

    const response = await aiResponse(userQuery);

    return new Response(
      JSON.stringify({ sender: "assistant", content: response }),
      {
        status: 201,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Something went wrong",
      }),
      {
        status: 500,
      }
    );
  }
}
