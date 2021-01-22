# Written by Rabia Alhaffar in 23/June/2020
# Script to build Pancake game framework from source!
# Updated: 16/December/2020
from os import system, path, mkdir
import sys

build_dir = "build"
build_filename = "pancake.js"
modules_list_file = "modules.txt"

if not path.exists(build_dir):
    mkdir(build_dir)

# Tell Python where is source folder and what name of build
jsbuild = open(build_dir + "/" + build_filename, "w")
js_src_files = []

with open(modules_list_file) as f:
    for line in f:
        js_src_files.append(open(line.rstrip()))

for jsfile in js_src_files:
    current_jsfile = jsfile.read()
    jsbuild.write(current_jsfile)
    jsbuild.write("\n")
    jsfile.close()

jsbuild.close()