export function GET() {
  return Response.json({
    status: 'ok',
    teamId: 'YOUR_TEAM_ID',
    message: 'Backend connected successfully!'
  });
}
