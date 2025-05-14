"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Mail, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

// サイトに表示するイラスト情報
const illustrations = [
  {
    id: "1",
    title: "燐華",
    description: "ツイッターのヘッダーとして使用しているゲームキャラのイラスト",
    imageUrl: "/images/rinfa.jpg", // public/images フォルダに配置
  },
  {
    id: "2",
    title: "甘雨",
    description: "同じくツイッターのヘッダーとして使用している二次創作イラスト",
    imageUrl: "/images/kanu.jpg",
  },
  {
    id: "3",
    title: "イラスト作品 3",
    description: "イラスト作品の説明文がここに入ります。",
    imageUrl: "/images/illustration3.png",
  },
  {
    id: "4",
    title: "イラスト作品 4",
    description: "イラスト作品の説明文がここに入ります。",
    imageUrl: "/images/illustration4.png",
  },
  {
    id: "5",
    title: "イラスト作品 5",
    description: "イラスト作品の説明文がここに入ります。",
    imageUrl: "/images/illustration5.png",
  },
  {
    id: "6",
    title: "イラスト作品 6",
    description: "イラスト作品の説明文がここに入ります。",
    imageUrl: "/images/illustration6.png",
  },
]

// ゲーム作品情報
const games = [
  {
    id: "1",
    title: "ファイアウォール・クライシス",
    description: "ツクールMZのゲーム。鋭意制作中",
    imageUrl: "/images/rinfa.jpg",
    link: "#",
  },
  {
    id: "2",
    title: "DIALY~ちきゅうさいごのひ~",
    description: "2~4人向けのボードゲーム。鋭意制作中",
    imageUrl: "/images/game2.png",
    link: "#",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm z-50 border-b border-purple-100/10 dark:border-purple-900/10 transition-all duration-300 hover:py-5 py-0.5 group">
        <div className="container mx-auto px-4 flex justify-between items-center transition-all duration-300">
          <Link
            href="/"
            className="text-xl font-bold text-purple-700 dark:text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity"
          >
            Jam
          </Link>
          <nav className="transition-all duration-300 transform translate-y-[-6px] group-hover:translate-y-0 scale-95 group-hover:scale-100">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="#home"
                  className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:font-medium relative group opacity-60 group-hover:opacity-100"
                >
                  ホーム
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 dark:bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#illustrations"
                  className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:font-medium relative group opacity-60 group-hover:opacity-100"
                >
                  イラスト
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 dark:bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#games"
                  className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:font-medium relative group opacity-60 group-hover:opacity-100"
                >
                  ゲーム
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 dark:bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:font-medium relative group opacity-60 group-hover:opacity-100"
                >
                  連絡先
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 dark:bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle className="opacity-60 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100" />
        </div>
      </header>

      {/* ヒーローセクション - テキストコンポーネントを削除 */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        {/* フルスクリーンの背景イラスト */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/kanu.jpg" // メインビジュアル用の画像
            alt="メインビジュアル"
            fill
            className="object-cover w-full h-full object-top"
            priority
          />
          <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/30 backdrop-filter backdrop-blur-[1px]"></div>
        </div>

        {/* 下部にスクロールボタンのみ配置 */}
        <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
          <Link href="#illustrations">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border-purple-300/50 dark:border-purple-700/50 text-purple-700 dark:text-purple-400 hover:bg-white/50 dark:hover:bg-gray-900/50 group"
            >
              作品を見る
              <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>
          </Link>
        </div>
      </section>

      {/* イラストセクション */}
      <section id="illustrations" className="py-20 bg-purple-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100">
            イラスト<span className="text-purple-600 dark:text-purple-400">作品</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {illustrations.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-square">
                  <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg text-gray-800 dark:text-gray-200">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ゲームセクション */}
      <section id="games" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100">
            ゲーム<span className="text-purple-600 dark:text-purple-400">作品</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {games.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-purple-100 dark:border-purple-800 hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
                  <div className="mt-4 flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-700"
                    >
                      詳細を見る
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 連絡先セクション */}
      <section id="contact" className="py-20 bg-purple-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100">
            連絡<span className="text-purple-600 dark:text-purple-400">先</span>
          </h2>
      
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-purple-100 dark:border-purple-800">
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
              お仕事のご依頼やご質問などがございましたら、下記の連絡先までお気軽にお問い合わせください。
            </p>
      
            <div className="flex justify-center items-center space-x-2 text-purple-700 dark:text-purple-400">
              <Mail className="h-5 w-5" />
              <span className="text-lg">jamhf777@gmail.com</span>
            </div>
      
            <div className="mt-8 flex justify-center space-x-4">
              {/* メール作成画面に飛ぶ */}
              <Button asChild>
                <a href="mailto:jamhf777@gmail.com">
                  メッセージを送る
                </a>
              </Button>
      
              {/* X（旧Twitter）へ遷移 */}
              <Button asChild>
                <a
                  href="https://x.com/MK_III_Jam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SNSをフォロー
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 bg-white dark:bg-gray-950 border-t border-purple-100 dark:border-purple-900">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} ポートフォリオサイト. All rights reserved.</p>

          {/* 管理者ページへのリンク - 小さく配置 */}
          <Link
            href="/admin"
            className="text-xs text-gray-400 dark:text-gray-600 hover:text-purple-500 dark:hover:text-purple-400 mt-2 inline-block transition-colors"
          >
            管理者ページ
          </Link>
        </div>
      </footer>
    </main>
  )
}
