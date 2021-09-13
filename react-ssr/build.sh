echo "starting build"
echo "cleaning up older build"
rm -rf build/
echo "building..."
npm run build
echo "deploying to server"
cp build/* /Volumes/dpresume.com/httpdocs
echo "success. completed"
