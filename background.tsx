"use client";
export default function Background() {
  // use the uploaded image path as the URL
  const imgUrl = "/mnt/data/2a22106f-4530-41c0-88f3-b4ed79728752.png";

  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden">
      <div
        className="h-full w-full bg-center bg-cover rounded-l-xl"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(99,102,241,0.6), rgba(99,102,241,0.25)), url('${imgUrl}')`,
        }}
      >
        {/* subtle overlay message */}
        <div className="h-full w-full flex items-center justify-center p-6">
          <div className="max-w-xs text-white">
            <h3 className="text-2xl font-bold mb-2 drop-shadow">Welcome to beyonCloud</h3>
            <p className="text-sm drop-shadow">Secure, simple admin to manage your users.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
