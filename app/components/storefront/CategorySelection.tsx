import Image from "next/image";
import Link from "next/link";
import all from "@/public/TikTokAll.png";
import instagram from "@/public/Instagram.png";
import facebook from "@/public/Facebook.png";

export function CategoriesSelection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-extrabold tracking-tight">
        קניות לפי קטגוריות
        </h2>

        <Link
          className="text-sm font-semibold text-primary hover:text-primary/80"
          href="/products/all"
        >
          עיין בכל המוצרים &rarr;
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2">
          <Image
            src={all}
            alt="כל המוצרים Image"
            className="object-cover object-center "
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
          <div className="p-6 flex items-end">
            <Link href="/products/all">
              <h3 className="text-white font-semibold">כל המוצרים</h3>
              <p className="mt-1 text-sm text-white">קנה עכשיו</p>
            </Link>
          </div>
        </div>

        <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <Image
            src={instagram}
            alt="Products for Instagram Image"
            className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href="/products/instagram">
              <h3 className="text-white font-semibold">מוצרים לאינסטגרם</h3>
              <p className="mt-1 text-sm text-white">קנה עכשיו</p>
            </Link>
          </div>
        </div>

        <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <Image
            src={facebook}
            alt="Women product image"
            className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href="/products/facebook">
              <h3 className="text-white font-semibold">מוצרים לפייסבוק</h3>
              <p className="mt-1 text-sm text-white">קנה עכשיו</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
