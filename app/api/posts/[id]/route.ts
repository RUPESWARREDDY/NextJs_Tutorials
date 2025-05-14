import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  const id = context.params.id;

  try {
    const post = await prisma.post.delete({
      where: { id }, 
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
export async function PUT(req: NextRequest, context: { params: { id: string } }) {
    const id = context.params.id;
    const body = await req.json();
    const { name, title, content, description } = body;
  
    try {
      const updatedPost = await prisma.post.update({
        where: { id },
        data: { name, title, content, description },
      });
  
      return NextResponse.json(updatedPost, { status: 200 });
    } catch (error) {
      console.error('Error updating post:', error);
      return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
    }
  }
