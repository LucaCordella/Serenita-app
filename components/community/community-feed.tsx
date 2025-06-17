"use client"

import { useState } from "react"
import { MessageSquare, MoreHorizontal, ThumbsUp } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

type Post = {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  timestamp: string
  likes: number
  comments: number
  isLiked: boolean
}

export function CommunityFeed() {
  // Dados simulados para publicações da comunidade
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      author: {
        name: "Usuário Anônimo",
        avatar: "",
      },
      content:
        "Estou praticando meditação há uma semana e já me sinto mais centrado. Alguém mais teve resultados rápidos com meditação?",
      timestamp: "2 horas atrás",
      likes: 24,
      comments: 5,
      isLiked: false,
    },
    {
      id: "2",
      author: {
        name: "Membro Consciente",
        avatar: "",
      },
      content:
        "Queria compartilhar uma vitória - estou registrando meu humor consistentemente há 30 dias seguidos! Os insights que ganhei sobre meus padrões emocionais foram reveladores.",
      timestamp: "5 horas atrás",
      likes: 42,
      comments: 8,
      isLiked: true,
    },
    {
      id: "3",
      author: {
        name: "Guerreiro do Bem-estar",
        avatar: "",
      },
      content:
        "Alguém tem recomendações para lidar com ansiedade antes de reuniões importantes? Tenho tentado respiração profunda, mas procuro outras técnicas.",
      timestamp: "Ontem",
      likes: 18,
      comments: 12,
      isLiked: false,
    },
    {
      id: "4",
      author: {
        name: "Buscador da Serenidade",
        avatar: "",
      },
      content:
        "Acabei de completar minha primeira autoavaliação psicológica no app. Foi muito esclarecedora e me ajudou a entender alguns padrões que não havia notado antes. Alguém mais achou essas avaliações úteis?",
      timestamp: "2 dias atrás",
      likes: 31,
      comments: 7,
      isLiked: false,
    },
  ])

  const [newPost, setNewPost] = useState("")

  const toggleLike = (id: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked,
          }
        }
        return post
      }),
    )
  }

  const addPost = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: Date.now().toString(),
        author: {
          name: "Você",
          avatar: "",
        },
        content: newPost,
        timestamp: "Agora mesmo",
        likes: 0,
        comments: 0,
        isLiked: false,
      }
      setPosts([post, ...posts])
      setNewPost("")
    }
  }

  return (
    <div className="space-y-4">
      <Card className="border-slate-700 bg-slate-900/30">
        <CardContent className="p-4">
          <Textarea
            placeholder="Compartilhe algo com a comunidade..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="min-h-24 bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500"
          />
          <div className="mt-4 flex justify-end">
            <Button onClick={addPost} className="btn-primary">
              Publicar
            </Button>
          </div>
        </CardContent>
      </Card>

      <Separator className="bg-slate-700" />

      <ScrollArea className="h-[500px] pr-4">
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="border-slate-700 bg-slate-900/30 card-hover">
              <CardHeader className="p-4 pb-0">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-teal-500/20 text-teal-500">
                        {post.author.name.charAt(0)}
                      </AvatarFallback>
                      {post.author.avatar && (
                        <AvatarImage
                          src={post.author.avatar || "/placeholder.svg?height=40&width=40"}
                          alt="Avatar do usuário"
                        />
                      )}
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-white">{post.author.name}</p>
                      <p className="text-xs text-slate-500">{post.timestamp}</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Mais opções</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-slate-800 text-slate-200 border-slate-700">
                      <DropdownMenuItem className="hover:bg-slate-700">Denunciar publicação</DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-slate-700">Ocultar publicação</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-slate-300">{post.content}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between p-4 pt-0">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`flex items-center gap-1 text-sm transition-colors ${
                      post.isLiked ? "text-teal-500" : "text-slate-400"
                    } hover:text-teal-500`}
                    onClick={() => toggleLike(post.id)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{post.likes}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 text-sm text-slate-400 hover:text-slate-300 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm text-slate-400 hover:text-slate-300 transition-colors"
                >
                  Responder
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
