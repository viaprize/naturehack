#!/bin/bash

set -e

if ! command -v git-lfs >/dev/null 2>&1; then
  echo "Error: git-lfs is not installed. Please install git-lfs first."
  exit 1
fi

git-lfs fetch
git-lfs checkout
