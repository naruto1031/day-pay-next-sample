import { NextResponse } from 'next/server'

const productsData = {
  electronics: [
    { id: 1, name: 'ノートパソコン' },
    { id: 2, name: 'スマートフォン' },
  ],
  furniture: [
    { id: 3, name: 'ソファ' },
    { id: 4, name: 'ダイニングテーブル' },
  ],
  clothing: [
    { id: 5, name: 'シャツ' },
    { id: 6, name: 'ジーンズ' },
  ],
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category') || 'electronics'
  const products = productsData[category as keyof typeof productsData] || []
  return NextResponse.json({ products })
}
