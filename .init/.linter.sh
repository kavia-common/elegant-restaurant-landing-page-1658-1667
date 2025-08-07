#!/bin/bash
cd /home/kavia/workspace/code-generation/elegant-restaurant-landing-page-1658-1667/landing_page_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

