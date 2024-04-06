echo "starting build"
echo "cleaning up older build"
rm -Rf build/
rm -Rf dist/
echo "building..."
#npm run build
yarn build
#echo "deploying to server"
#cp -R build/ /Volumes/dpresume.com/httpdocs
#echo "cleaning up"
#rm -rf build/
#npx gulp
echo "Build generated"
