import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Check, Clock, X } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">Daftar Investasi</h1>
        <p className="text-slate-600 text-sm">Data investasi yang anda lakukan</p>
      </div>
      <div className="flex flex-col gap-3 max-w-3xl mt-8">
        {investor.map((invest, index) => (
          <div key={index} className="bg-white border items-center rounded-md p-2 flex justify-between max-sm:flex-col gap-4">
            <div className="flex sm:items-center gap-4 max-sm:flex-col w-full">
              <div>
                <Image src={invest.foto_profil} width={135} height={100} alt={invest.title} className="rounded-md max-sm:w-full" unoptimized />
              </div>
              <div className="max-sm:ps-1">
                <p className="font-medium">{invest.title}</p>
                <p className="mt-1">
                  Jumlah Tawaran Investasi <span className="text-green-600 bg-green-600/10 rounded-md px-2 py-1 text-sm">Rp.{invest.investasi}</span>
                </p>
                <div>
                  <Dialog>
                    <DialogTrigger>
                      <button className="text-blue-600 text-sm cursor-pointer hover:underline">Lihat Detail</button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-start">Detail Investasi</DialogTitle>
                        <DialogClose />
                      </DialogHeader>
                      <div className="text-left">
                        <table className="table-auto w-full">
                          <tbody>
                            <tr>
                              <td className="py-2">Judul Ide</td>
                              <td className="px-2">:</td>
                              <td className="font-medium">{invest.title}</td>
                            </tr>
                            <tr>
                              <td className="py-2">Jumlah</td>
                              <td className="px-2">:</td>
                              <td className="font-medium">Rp. {invest.investasi}</td>
                            </tr>
                            <tr>
                              <td className="py-2">Email</td>
                              <td className="px-2">:</td>
                              <td className="font-medium">{invest.email}</td>
                            </tr>
                            <tr>
                              <td className="py-2">No HP</td>
                              <td className="px-2">:</td>
                              <td className="font-medium">{invest.nomor_hp}</td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="mt-2">Catatan</p>
                        <ScrollArea className="max-h-40 mt-2 pr-3">
                          <p className="text-sm text-slate-600 text-justify">{invest.note}</p>
                        </ScrollArea>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            <div>
              {invest.status === 'Diterima' ? (
                <div className="flex items-center gap-1 bg-green-600/10 py-1 text-green-600 rounded-full text-sm w-max px-3 mr-4">
                  <Check size={18} />
                  <p>Diterima</p>
                </div>
              ) : invest.status === 'Ditolak' ? (
                <div className="flex items-center gap-1 text-red-600 bg-red-600/10 py-1 rounded-full w-max px-3 mr-4 text-sm">
                  <X size={18} />
                  <p>Ditolak</p>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-yellow-400 bg-yellow-400/5 py-1 rounded-full w-max px-3 mr-4 text-sm">
                  <Clock size={18} />
                  <p>Menunggu</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const investor = [
  {
    id: 1,
    title: 'Ide Usaha Kerajinan Tangan',
    investasi: '200000',
    foto_profil: '/thumbniel.png',
    status: 'Diterima',
    email: 'galuhkun@gmail.com',
    nomor_hp: '081999200029',
    note: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias nam neque laudantium provident! Dolore delectus numquam perspiciatis hic illum asperiores aut assumenda. Praesentium commodi quis labore accusantium. Quae, quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias nam neque laudantium provident! Dolore delectus numquam perspiciatis hic illum asperiores aut assumenda. Praesentium commodi quis labore accusantium. Quae, quisquam.',
  },
  {
    id: 1,
    title: 'Ide Usaha Kerajinan Tangan',
    investasi: '200000',
    foto_profil: '/thumbniel.png',
    status: 'Ditolak',
    email: 'galuhkun@gmail.com',
    nomor_hp: '081999200029',
    note: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias nam neque laudantium provident! Dolore delectus numquam perspiciatis hic illum asperiores aut assumenda. Praesentium commodi quis labore accusantium. Quae, quisquam.',
  },
  {
    id: 1,
    title: 'Ide Usaha Kerajinan Tangan',
    investasi: '200000',
    foto_profil: '/thumbniel.png',
    status: 'Menunggu',
    email: 'galuhkun@gmail.com',
    nomor_hp: '081999200029',
    note: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias nam neque laudantium provident! Dolore delectus numquam perspiciatis hic illum asperiores aut assumenda. Praesentium commodi quis labore accusantium. Quae, quisquam.',
  },
];
