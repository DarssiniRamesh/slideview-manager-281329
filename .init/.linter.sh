#!/bin/bash
cd /home/kavia/workspace/code-generation/slideview-manager-281329/ppt_slider_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

