#!/bin/bash

echo "🚀 Starting AvaxLens..."
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

PORT=3000

# Check if node_modules exist
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 node_modules not found, installing dependencies...${NC}"
    npm install
    echo -e "${GREEN}✅ Dependencies installed${NC}"
    echo ""
fi

# Check if port is already in use
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    pid=$(lsof -Pi :$PORT -sTCP:LISTEN -t)
    echo -e "${YELLOW}⚠️  Port $PORT already in use by process $pid${NC}"
    echo "   Killing process $pid..."
    kill -9 $pid 2>/dev/null
    sleep 1
    echo -e "${GREEN}✅ Port $PORT freed${NC}"
    echo ""
fi

# Cleanup zombie Next.js processes
zombies=$(ps aux | grep -E "(next dev|next-server)" | grep -v grep | awk '{print $2}')
if [ -n "$zombies" ]; then
    echo "🧹 Cleaning up zombie Next.js processes..."
    echo "$zombies" | xargs -r kill -9 2>/dev/null
    sleep 1
    echo -e "${GREEN}✅ Cleaned up${NC}"
    echo ""
fi

# Start Next.js dev server in background
echo "🎨 Starting Next.js dev server..."
npm run dev &
DEV_PID=$!
sleep 3

# Verify it started
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo ""
    echo -e "${GREEN}✅ AvaxLens is running!${NC}"
    echo ""
    echo "📍 App: http://localhost:$PORT"
    echo "   PID: $DEV_PID"
    echo ""
    echo "🛑 To stop: ./stop.sh"
    echo ""
else
    echo ""
    echo -e "${RED}❌ Failed to start. Check logs above.${NC}"
    echo ""
fi
