"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogOut, Save, Trash2 } from "lucide-react"

// 管理画面で表示・管理するイラスト情報
const initialIllustrations = [
  {
    id: "1",
    title: "rinfa",
    description: "ゲームキャラ＆ヘッダー",
    imageUrl: "/images/rinfa.jpg",
    fileName: "rinfa.jpg",
  },
  {
    id: "2",
    title: "甘雨",
    description: "二次創作＆ヘッダー",
    imageUrl: "/images/kanu.jpg",
    fileName: "kanu.jpg",
  },
  {
    id: "3",
    title: "堕ちること瑠璃の如く",
    description: "二次創作同人誌",
    imageUrl: "/images/ruri.jpg",
    fileName: "ruri.jpg",
  },
  {
    id: "4",
    title: "ユエ",
    description: "オリジナル同人誌",
    imageUrl: "/images/yue2.jpg",
    fileName: "yue2.jpg",
  },
  {
    id: "5",
    title: "イラスト作品 5",
    description: "イラスト作品の説明文がここに入ります。",
    imageUrl: "/images/illustration5.png",
    fileName: "illustration5.png",
  },
  {
    id: "6",
    title: "イラスト作品 6",
    description: "イラスト作品の説明文がここに入ります。",
    imageUrl: "/images/illustration6.png",
    fileName: "illustration6.png",
  },
]

export default function AdminDashboard() {
  const [illustrations, setIllustrations] = useState(initialIllustrations)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [fileName, setFileName] = useState("")
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const router = useRouter()

  // 認証チェック
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("admin_authenticated") === "true"
    if (!isAuthenticated) {
      router.push("/admin")
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fileName) {
      setError("ファイル名を入力してください")
      return
    }

    setError("")

    try {
      // 新しいイラスト情報を作成
      const newIllustration = {
        id: Date.now().toString(),
        title,
        description,
        imageUrl: `/images/${fileName}`,
        fileName,
      }

      // イラスト一覧を更新
      setIllustrations([newIllustration, ...illustrations])

      // フォームをリセット
      setTitle("")
      setDescription("")
      setFileName("")

      // 成功メッセージを表示
      setSuccessMessage("イラスト情報が登録されました！")

      // 3秒後にメッセージを消す
      setTimeout(() => {
        setSuccessMessage("")
      }, 3000)

      // 実際の手順の説明を表示
      alert(
        "イラスト登録手順:\n\n" +
          "1. 画像ファイルを 'public/images/' フォルダに配置\n" +
          "2. ファイル名: " +
          fileName +
          "\n" +
          "3. イラスト情報がサイトに反映されます",
      )
    } catch (err) {
      console.error("登録中にエラーが発生しました", err)
      setError("登録中にエラーが発生しました")
    }
  }

  const handleDelete = (id: string) => {
    if (!confirm("このイラスト情報を削除してもよろしいですか？")) {
      return
    }

    // 削除するイラストの情報を取得
    const illustrationToDelete = illustrations.find((item) => item.id === id)

    // イラスト一覧から削除
    setIllustrations(illustrations.filter((item) => item.id !== id))

    // 実際の削除手順の説明を表示
    if (illustrationToDelete) {
      alert(
        "イラスト削除手順:\n\n" +
          "1. 'public/images/' フォルダから以下のファイルを削除\n" +
          "2. ファイル名: " +
          illustrationToDelete.fileName,
      )
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated")
    router.push("/admin")
  }

  const handleExportConfig = () => {
    // イラスト情報をJSON形式でエクスポート
    const configData = JSON.stringify(illustrations, null, 2)

    // ダウンロード用のリンクを作成
    const blob = new Blob([configData], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "illustrations-config.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-purple-50 dark:bg-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">管理ダッシュボード</h1>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={handleExportConfig}>
              <Save className="mr-2 h-4 w-4" />
              設定をエクスポート
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              ログアウト
            </Button>
          </div>
        </div>

        {successMessage && (
          <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-4 rounded-md mb-6">
            {successMessage}
          </div>
        )}

        <Tabs defaultValue="register">
          <TabsList className="mb-6">
            <TabsTrigger value="register">イラスト情報登録</TabsTrigger>
            <TabsTrigger value="manage">イラスト管理</TabsTrigger>
            <TabsTrigger value="help">ヘルプ</TabsTrigger>
          </TabsList>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>新しいイラスト情報を登録</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">タイトル</Label>
                    <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">説明</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fileName">ファイル名（例: illustration7.png）</Label>
                    <Input
                      id="fileName"
                      value={fileName}
                      onChange={(e) => setFileName(e.target.value)}
                      placeholder="example.png"
                      required
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      ※ 画像ファイルは手動で public/images/ フォルダに配置してください
                    </p>
                  </div>

                  {error && <p className="text-sm text-red-500">{error}</p>}

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    情報を登録
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage">
            <Card>
              <CardHeader>
                <CardTitle>イラスト管理</CardTitle>
              </CardHeader>
              <CardContent>
                {illustrations.length === 0 ? (
                  <p className="text-center text-gray-500 dark:text-gray-400 py-8">イラストがまだ登録されていません</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {illustrations.map((illustration) => (
                      <div
                        key={illustration.id}
                        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
                      >
                        <div className="relative aspect-square">
                          <Image
                            src={illustration.imageUrl || "/placeholder.svg?height=400&width=400"}
                            alt={illustration.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg text-gray-800 dark:text-gray-200">{illustration.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{illustration.description}</p>
                          <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                            ファイル: {illustration.fileName}
                          </p>
                          <div className="mt-4 flex justify-end">
                            <Button variant="destructive" size="sm" onClick={() => handleDelete(illustration.id)}>
                              <Trash2 className="h-4 w-4 mr-1" />
                              削除
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="help">
            <Card>
              <CardHeader>
                <CardTitle>ヘルプ - イラストの管理方法</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">イラストの登録方法</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      画像ファイルを{" "}
                      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">public/images/</code>{" "}
                      フォルダに配置
                    </li>
                    <li>「イラスト情報登録」タブでタイトル、説明、ファイル名を入力</li>
                    <li>「情報を登録」ボタンをクリック</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">イラストの削除方法</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>「イラスト管理」タブで削除したいイラストを見つける</li>
                    <li>「削除」ボタンをクリック</li>
                    <li>確認ダイアログで「OK」をクリック</li>
                    <li>
                      表示される指示に従って、画像ファイルを{" "}
                      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">public/images/</code>{" "}
                      フォルダから削除
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">設定のエクスポート</h3>
                  <p>
                    「設定をエクスポート」ボタンをクリックすると、現在のイラスト情報がJSONファイルとしてダウンロードされます。
                    このファイルはバックアップとして保存しておくことをお勧めします。
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md">
                  <h3 className="text-lg font-medium mb-2 text-yellow-800 dark:text-yellow-400">注意事項</h3>
                  <ul className="list-disc pl-5 space-y-1 text-yellow-700 dark:text-yellow-300">
                    <li>
                      画像ファイルは手動で{" "}
                      <code className="bg-yellow-100 dark:bg-yellow-900/50 px-1 py-0.5 rounded">public/images/</code>{" "}
                      フォルダに配置する必要があります
                    </li>
                    <li>ファイル名は正確に入力してください（拡張子も含む）</li>
                    <li>定期的に設定をエクスポートしてバックアップを取ることをお勧めします</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
