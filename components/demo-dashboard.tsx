"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Activity, Users, DollarSign, BarChart3 } from "lucide-react"

interface DemoData {
  revenue: number
  users: number
  conversion: number
  growth: number
}

export function DemoDashboard() {
  const [data, setData] = useState<DemoData>({
    revenue: 125000,
    users: 2847,
    conversion: 3.2,
    growth: 12.5,
  })
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setData((prev) => ({
          revenue: prev.revenue + Math.floor(Math.random() * 1000),
          users: prev.users + Math.floor(Math.random() * 10),
          conversion: Math.max(0, prev.conversion + (Math.random() - 0.5) * 0.1),
          growth: Math.max(0, prev.growth + (Math.random() - 0.5) * 0.5),
        }))
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isLive])

  return (
    <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-900">Analytics Dashboard</h3>
        <div className="flex items-center gap-2">
          <Badge variant={isLive ? "default" : "secondary"} className="bg-green-100 text-green-800 text-xs">
            <div
              className={`w-1.5 h-1.5 rounded-full mr-1 ${isLive ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
            ></div>
            {isLive ? "Live" : "Demo"}
          </Badge>
          <Button
            onClick={() => setIsLive(!isLive)}
            size="sm"
            variant={isLive ? "destructive" : "default"}
            className={`text-xs px-2 py-1 h-6 ${isLive ? "bg-red-500 hover:bg-red-600" : "bg-teal-600 hover:bg-teal-700"}`}
          >
            {isLive ? "Stop" : "Go Live"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600">Revenue</p>
                <p className="text-lg font-bold text-gray-900">${data.revenue.toLocaleString()}</p>
              </div>
              <DollarSign className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex items-center mt-1">
              <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
              <span className="text-xs text-green-600">+{data.growth.toFixed(1)}%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600">Users</p>
                <p className="text-lg font-bold text-gray-900">{data.users.toLocaleString()}</p>
              </div>
              <Users className="w-5 h-5 text-blue-500" />
            </div>
            <div className="flex items-center mt-1">
              <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
              <span className="text-xs text-green-600">+8.2%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600">Conversion</p>
                <p className="text-lg font-bold text-gray-900">{data.conversion.toFixed(1)}%</p>
              </div>
              <Activity className="w-5 h-5 text-teal-500" />
            </div>
            <div className="flex items-center mt-1">
              <TrendingDown className="w-3 h-3 text-red-500 mr-1" />
              <span className="text-xs text-red-600">-0.3%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600">Growth</p>
                <p className="text-lg font-bold text-gray-900">{data.growth.toFixed(1)}%</p>
              </div>
              <BarChart3 className="w-5 h-5 text-purple-500" />
            </div>
            <div className="flex items-center mt-1">
              <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
              <span className="text-xs text-green-600">+2.1%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Compact Chart */}
      <Card className="border-0 shadow-sm mb-3">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Revenue Trend</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded flex items-end justify-between p-2">
            {[65, 78, 82, 88, 95, 92, 98].map((height, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-teal-500 to-teal-400 rounded-t transition-all duration-500"
                style={{
                  height: `${height * 0.6}%`,
                  width: "10%",
                  transform: isLive ? `scaleY(${0.8 + Math.random() * 0.4})` : "scaleY(1)",
                }}
              ></div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Compact AI Insights */}
      <div className="p-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-900 mb-1">🤖 AI Insights</h4>
        <ul className="text-xs text-gray-700 space-y-0.5">
          <li>• Revenue growth accelerating (+12.5% vs last month)</li>
          <li>• User acquisition trending upward in mobile segment</li>
          <li>• Predicted 15% growth next quarter based on trends</li>
        </ul>
      </div>
    </div>
  )
}
