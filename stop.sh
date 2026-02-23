#!/bin/bash

echo "🛑 Stopping AvaxLens..."
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

PORT=3000

# Kill process on port
kill_port() {
    local port=$1
    local pids=$(lsof -ti:$port 2>/dev/null)

    if [ -n "$pids" ]; then
        echo -e "${RED}🔴 Stopping process on port $port...${NC}"
        echo "   PIDs: $pids"
        echo "$pids" | xargs kill -9 2>/dev/null
        sleep 1

        if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1 ; then
            echo -e "${RED}❌ Failed to free port $port${NC}"
        else
            echo -e "${GREEN}✅ Port $port freed${NC}"
        fi
    else
        echo -e "${GREEN}✅ No process on port $port${NC}"
    fi
}

kill_port $PORT
echo ""

# Kill remaining Next.js processes
echo "🔴 Stopping remaining Next.js processes..."
node_pids=$(ps aux | grep -E "(next dev|next-server)" | grep -v grep | awk '{print $2}')

if [ -n "$node_pids" ]; then
    echo "   Found processes:"
    ps aux | grep -E "(next dev|next-server)" | grep -v grep | awk '{print "   PID " $2 ": " $11 " " $12 " " $13}'
    echo "$node_pids" | xargs kill -9 2>/dev/null
    echo -e "${GREEN}✅ Killed remaining Next.js processes${NC}"
else
    echo -e "${GREEN}✅ No remaining Next.js processes${NC}"
fi
echo ""

echo -e "${GREEN}✅ AvaxLens stopped!${NC}"
echo ""
