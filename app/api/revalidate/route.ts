import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import {TAGS} from "./../../_lib/tags";



export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get('tag');

    if (!tag) {
      return NextResponse.json(
        {
          success: false,
          message: 'Не указан тег для ревалидации',
        },
        { status: 400 },
      );
    }

    const validTags = Object.values(TAGS);
    if (!validTags.includes(tag as string)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Указан недопустимый тег',
          validTags,
        },
        { status: 400 },
      );
    }

    revalidateTag(tag);

    return NextResponse.json(
      {
        success: true,
        message: 'Ревалидация успешно выполнена',
        tag,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Ошибка ревалидации:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Ошибка при выполнении ревалидации',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
