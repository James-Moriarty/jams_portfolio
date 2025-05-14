"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // テスト用の簡単なパスワード認証（本番環境では必ず変更してください）
    if (password === "0124943493hF") {
      // ログイン成功 - セッションストレージにフラグを設定
      sessionStorage.setItem("admin_authenticated", "true")
      router.push("/admin/dashboard")
    } else {
      setError("パスワードが正しくありません")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">管理者ログイン</CardTitle>
          <CardDescription>ポートフォリオを更新するには管理者パスワードを入力してください</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="password"
                  type="password"
                  placeholder="パスワードを入力"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={loading}>
              {loading ? "ログイン中..." : "ログイン"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
