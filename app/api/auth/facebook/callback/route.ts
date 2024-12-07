import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.redirect('/auth?error=no_code');
  }

  try {
    // Обмен кода на токен
    const tokenResponse = await fetch(`https://graph.facebook.com/v12.0/oauth/access_token?client_id=${process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET}&code=${code}&redirect_uri=${process.env.NEXT_PUBLIC_API_URL}/api/auth/facebook/callback`);

    const tokenData = await tokenResponse.json();

    // Получение информации о пользователе
    const userResponse = await fetch(`https://graph.facebook.com/me?fields=id,name,email&access_token=${tokenData.access_token}`);
    const userData = await userResponse.json();

    // Здесь можно создать сессию пользователя
    // и сохранить информацию в базе данных

    return NextResponse.redirect('/dashboard');
  } catch (error) {
    console.error('Facebook auth error:', error);
    return NextResponse.redirect('/auth?error=auth_failed');
  }
} 