'use client';
import { FC, useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
// import ReactPaginate from 'react-paginate';
// import Pagination from 'react-js-pagination';

import { TopSellers } from './TopSellers';
import { BanSellerModal } from 'components/modals/BanSellerModal';
import { EnumRoles } from 'types/enums';
import { SeacrhIcon } from 'components/icons/social/SeacrhIcon';
import {
  UpDownArrowsIcon,
  ArrowLeft,
  ArrowRight,
} from 'components/icons/ArrowIcons';

import s from './SellersStats.module.scss';

import MarvinImg from 'assets/images/top-sellers/marvin.png';
import KristinImg from 'assets/images/top-sellers/kristin.png';
import ArthurImg from 'assets/images/top-sellers/arthur.png';

export interface IExampleUser {
  id: string;
  userName: string;
  avatarURL?: string | undefined | null;
  email: string;
  address: {
    phoneNumber: string;
  };
  emailConfirmDate: string;
  role: EnumRoles;
  sells: {
    quantity: number;
    sum: number;
  };
  banned: boolean;
}

let exampleUsers: IExampleUser[] = [
  {
    id: '1',
    userName: 'Kathryn Murphy',
    avatarURL: KristinImg.src,
    email: 'smallpaul@me.com',
    address: {
      phoneNumber: '(702) 555-0122',
    },
    emailConfirmDate: '31/05/20, 14:20',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 25,
      sum: 4400,
    },
    banned: false,
  },
  {
    id: '2',
    userName: 'Floyd Miles',
    avatarURL: ArthurImg.src,
    email: 'mccurley@yahoo.ca',
    address: {
      phoneNumber: '(205) 555-0100',
    },
    emailConfirmDate: '05/06/20, 11:30',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 36,
      sum: 360,
    },
    banned: true,
  },
  {
    id: '3',
    userName: 'Jacob Jones',
    avatarURL: MarvinImg.src,
    email: 'pkplex@optonline.net',
    address: {
      phoneNumber: '(303) 555-0105',
    },
    emailConfirmDate: '02/06/20, 13:30',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 10,
      sum: 250,
    },
    banned: false,
  },
  {
    id: '4',
    userName: 'Kris Watson',
    avatarURL: MarvinImg.src,
    email: 'kriswatson@gmail.com',
    address: {
      phoneNumber: '(099) 555-5599',
    },
    emailConfirmDate: '01/01/18, 01:00',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 2470,
      sum: 299000,
    },
    banned: false,
  },
  {
    id: '5',
    userName: 'Theresa Webb',
    avatarURL: KristinImg.src,
    email: 'theresawebb@mail.com',
    address: {
      phoneNumber: '(702) 725-3533',
    },
    emailConfirmDate: '31/05/18, 14:20',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 2112,
      sum: 222000,
    },
    banned: false,
  },

  {
    id: '6',
    userName: 'Guy Hawkins',
    avatarURL: ArthurImg.src,
    email: 'guyhawkins@mail.com',
    address: {
      phoneNumber: '(712) 545-0123',
    },
    emailConfirmDate: '31/05/18, 18:10',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 2410,
      sum: 235000,
    },
    banned: false,
  },
  {
    id: '7',
    userName: 'Ralph Edwards',
    avatarURL: MarvinImg.src,
    email: 'ralphedwards@yahoo.ca',
    address: {
      phoneNumber: '(225) 555-0300',
    },
    emailConfirmDate: '05/06/18, 11:40',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 2113,
      sum: 221500,
    },
    banned: false,
  },
  {
    id: '8',
    userName: 'Wade Warren',
    avatarURL: KristinImg.src,
    email: 'wadewarren@optonline.net',
    address: {
      phoneNumber: '(303) 555-0125',
    },
    emailConfirmDate: '02/06/18, 14:10',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 2233,
      sum: 253000,
    },
    banned: false,
  },
  {
    id: '9',
    userName: 'Darlene Robertson',
    avatarURL: KristinImg.src,
    email: 'bradl@comcast.net',
    address: {
      phoneNumber: '(270) 555-0117',
    },
    emailConfirmDate: '02/06/20, 14:30',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 47,
      sum: 471,
    },
    banned: false,
  },
  {
    id: '10',
    userName: 'Cody Fisher',
    avatarURL: MarvinImg.src,
    email: 'elflord@mac.com',
    address: {
      phoneNumber: '(219) 555-0114',
    },
    emailConfirmDate: '31/05/20, 14:20',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 36,
      sum: 6900,
    },
    banned: true,
  },

  {
    id: '11',
    userName: 'Jenny Wilson',
    avatarURL: ArthurImg.src,
    email: 'jginspace@mac.com',
    address: {
      phoneNumber: '(319) 555-0115',
    },
    emailConfirmDate: '03/06/20, 15:00',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 17,
      sum: 360,
    },
    banned: false,
  },
  {
    id: '12',
    userName: 'Cameron Williamson',
    avatarURL: KristinImg.src,
    email: 'crusader@yahoo.com',
    address: {
      phoneNumber: '(603) 555-0123',
    },
    emailConfirmDate: '02/06/20, 14:30',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 360,
      sum: 1850,
    },
    banned: false,
  },
  {
    id: '13',
    userName: 'Esther Howard',
    avatarURL: ArthurImg.src,
    email: 'mfburgo@live.com',
    address: {
      phoneNumber: '(252) 555-0126',
    },
    emailConfirmDate: '01/06/20, 09:30',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 8,
      sum: 74,
    },
    banned: false,
  },
  {
    id: '14',
    userName: 'Ralph Edwards',
    avatarURL: MarvinImg.src,
    email: 'plover@aol.com',
    address: {
      phoneNumber: '(406) 555-0120',
    },
    emailConfirmDate: '03/06/20, 15:00',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 23,
      sum: 50,
    },
    banned: false,
  },
  {
    id: '15',
    userName: 'Eleanor Pena',
    avatarURL: KristinImg.src,
    email: 'amichalo@msn.com',
    address: {
      phoneNumber: '(209) 555-0104',
    },
    emailConfirmDate: '02/06/20, 14:30',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 158,
      sum: 5000,
    },
    banned: false,
  },
];

for (let i = 16; i < 100; i++) {
  exampleUsers.push({
    id: `${i}`,
    userName: `Test user ${i}`,
    // avatarURL: KristinImg.src,
    email: `test${i}@mail.com`,
    address: {
      phoneNumber: `(199) 555-01${i}`,
    },
    emailConfirmDate: '31/05/21, 14:20',
    role: EnumRoles.SELLER,
    sells: {
      quantity: 25,
      sum: 4400,
    },
    banned: false,
  });
}

const costWithCoins = (number: number) => {
  if (number === 0) return '0.00';

  const stringified = `${Math.round(number * 100)}`;

  const cost =
    stringified.slice(0, stringified.length - 2) +
    '.' +
    stringified.slice(stringified.length - 2);

  return cost;
};

interface IFilters {
  search: string;
  from: string;
  to: string;
}

const isValidDate = (dateString: string) => {
  if (!dateString) return false;

  // Проверка формата DD-MM-YYYY
  var regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
  if (!regex.test(dateString)) {
    return false;
  }

  const parts = dateString.split('-');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  const currentDate = new Date();

  let validDate = true;

  if (year < 2000 || year > currentDate.getFullYear()) {
    validDate = false;
  }

  if (
    year === currentDate.getFullYear() &&
    month > currentDate.getMonth() + 1
  ) {
    validDate = false;
  }

  if (month < 1 || month > 12) {
  }

  if (
    year === currentDate.getFullYear() &&
    month === currentDate.getMonth() + 1 &&
    day > currentDate.getDate()
  ) {
    validDate = false;
  }

  if (day < 1 || day > new Date(year, month, 0).getDate()) {
    validDate = false;
  }

  return validDate;
};

interface getParamsStringProps {}

export const SellersStats: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations('SellersPage.Stats');

  const qFrom = searchParams.get('from');
  const qTo = searchParams.get('to');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    // setValue,
    // reset,
  } = useForm<IFilters>({
    mode: 'onTouched',
    defaultValues: {
      search: searchParams.get('search') ?? '',
      from: qFrom && isValidDate(qFrom) ? qFrom : '',
      to: qTo && isValidDate(qTo) ? qTo : '',
    },
  });

  const [filteredUsers, setFilteredUsers] = useState(exampleUsers);

  const perPage = 10;
  const pageCount = Math.ceil(filteredUsers.length / perPage);
  const qPage = searchParams.get('page');
  const page =
    qPage && !Number.isNaN(+qPage) && +qPage <= pageCount ? +qPage : 1;

  const startIdx = Math.min(page * perPage - perPage, filteredUsers.length);
  const endIdx = Math.min(page * perPage, filteredUsers.length);

  const [fromIsFocused, setFromIsFocused] = useState(false);
  const [toIsFocused, setToIsFocused] = useState(false);

  const signupDateSortOrder = searchParams.get('signupDateSortOrder');
  const sellsSortOrder = searchParams.get('sellsSortOrder');

  const [users, setUsers] = useState<IExampleUser[]>([]);
  const [usersLoading, setUsersLoading] = useState(true);
  const [selectedUsersIds, setSelectedUsersIds] = useState<string[]>([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [userToBan, setUserToBan] = useState({} as IExampleUser);

  useEffect(() => {
    const { search, from, to } = getValues();

    let usersToSet = exampleUsers;

    if (search) {
      usersToSet = usersToSet.filter((user) => {
        const lowerCaseSearch = search.toLowerCase();
        if (
          user.userName.toLowerCase().includes(lowerCaseSearch) ||
          user.email.toLowerCase().includes(lowerCaseSearch)
        ) {
          return true;
        }

        return false;
      });
    }

    if (from) {
      usersToSet = usersToSet.filter((user) => {
        const year = '20' + user.emailConfirmDate.slice(6, 8);
        const month = user.emailConfirmDate.slice(3, 5);
        const day = user.emailConfirmDate.slice(0, 2);

        const fromDate = new Date(from).getTime();
        const userDate = new Date(`${year}-${month}-${day}`).getTime();

        return userDate >= fromDate;
      });
    }

    if (to) {
      usersToSet = usersToSet.filter((user) => {
        const year = '20' + user.emailConfirmDate.slice(6, 8);
        const month = user.emailConfirmDate.slice(3, 5);
        const day = user.emailConfirmDate.slice(0, 2);

        const toDate = new Date(to).getTime();
        const userDate = new Date(`${year}-${month}-${day}`).getTime();

        console.log({ toDate, userDate });

        return userDate <= toDate;
      });
    }

    if (signupDateSortOrder) {
      usersToSet = usersToSet.sort((userA, userB) => {
        const yearA = '20' + userA.emailConfirmDate.slice(6, 8);
        const yearB = '20' + userB.emailConfirmDate.slice(6, 8);
        const monthA = userA.emailConfirmDate.slice(3, 5);
        const monthB = userB.emailConfirmDate.slice(3, 5);
        const dayA = userA.emailConfirmDate.slice(0, 2);
        const dayB = userB.emailConfirmDate.slice(0, 2);
        const timeA = userA.emailConfirmDate.slice(10) + ':00';
        const timeB = userB.emailConfirmDate.slice(10) + ':00';

        const dateA = new Date(`${yearA}-${monthA}-${dayA}T${timeA}`).getTime();
        const dateB = new Date(`${yearB}-${monthB}-${dayB}T${timeB}`).getTime();

        return signupDateSortOrder === 'ASC' ? dateB - dateA : dateA - dateB;
      });
    }

    if (sellsSortOrder) {
      usersToSet = usersToSet.sort((userA, userB) =>
        sellsSortOrder === 'ASC'
          ? userB.sells.quantity - userA.sells.quantity
          : userA.sells.quantity - userB.sells.quantity
      );
    }

    const showedUsers = usersToSet.slice(startIdx, page * perPage);

    setFilteredUsers(usersToSet);
    setUsers(showedUsers);
    setUsersLoading(false);
  }, [searchParams]);

  const onFormSubmit = (data: IFilters) => {
    const { search, from, to } = data;

    const params = new URLSearchParams();

    params.set('page', '1');
    if (search) params.set('search', search);
    if (from) params.set('from', from.split('-').reverse().join('-'));
    if (to) params.set('to', to.split('-').reverse().join('-'));
    if (signupDateSortOrder)
      params.set('signupDateSortOrder', signupDateSortOrder);
    if (sellsSortOrder) params.set('sellsSortOrder', sellsSortOrder);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const mainCheckboxHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    if (!evt.target.checked) {
      setSelectedUsersIds([]);
    } else {
      setSelectedUsersIds(users.map((user) => user.id));
    }
  };

  const checkboxHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const userId = evt.target.value;

    if (evt.target.checked) {
      setSelectedUsersIds((prev) => [...prev, userId]);
    } else {
      setSelectedUsersIds((prev) => prev.filter((id) => userId !== id));
    }
  };

  const sortHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    const { search, from, to } = getValues();
    const sortBy = evt.currentTarget.value;

    const params = new URLSearchParams();

    params.set('page', '1');
    if (search) params.set('search', search);
    if (from) params.set('from', from.split('-').reverse().join('-'));
    if (to) params.set('to', to.split('-').reverse().join('-'));

    if (sortBy === 'signup_date') {
      signupDateSortOrder === 'ASC'
        ? params.set('signupDateSortOrder', 'DESC')
        : params.set('signupDateSortOrder', 'ASC');
    }
    if (sortBy === 'sells') {
      sellsSortOrder === 'ASC'
        ? params.set('sellsSortOrder', 'DESC')
        : params.set('sellsSortOrder', 'ASC');
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const banHandler = (user: IExampleUser) => {
    setUserToBan(user);
    setIsModalOpened(true);
  };

  const onPageChange = (newPage: number) => {
    const { search, from, to } = getValues();

    const params = new URLSearchParams();

    params.set('page', `${newPage}`);
    if (search) params.set('search', search);
    if (from) params.set('from', from.split('-').reverse().join('-'));
    if (to) params.set('to', to.split('-').reverse().join('-'));
    if (signupDateSortOrder)
      params.set('signupDateSortOrder', signupDateSortOrder);
    if (sellsSortOrder) params.set('sellsSortOrder', sellsSortOrder);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={s.stats}>
      <div className={s.stats_header}>
        <h2>{t('sellers')}</h2>
        <TopSellers allSellers={exampleUsers} />
      </div>
      <form className={s.filters} onSubmit={handleSubmit(onFormSubmit)}>
        <label className={s.search}>
          {t('Filters.search')}
          <input
            type="search"
            placeholder={t('Filters.search_seller')}
            {...register('search')}
          />
        </label>
        <div className={s.signup_date}>
          {t('Filters.signup_date')}
          <div className={s.date_inputs}>
            <input
              type={fromIsFocused ? 'date' : 'text'}
              placeholder={t('Filters.from')}
              {...register('from')}
              onFocus={() => setFromIsFocused(true)}
              onBlur={() => setFromIsFocused(false)}
            />
            <input
              type={toIsFocused ? 'date' : 'text'}
              placeholder={t('Filters.to')}
              {...register('to')}
              onFocus={() => setToIsFocused(true)}
              onBlur={() => setToIsFocused(false)}
            />
          </div>
        </div>
        <button type="submit">
          <SeacrhIcon />
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th className={s.checkbox}>
              <input
                type="checkbox"
                checked={
                  selectedUsersIds.length === users.length && users.length > 0
                }
                onChange={mainCheckboxHandler}
              />
            </th>
            <th>{t('Table.user_name')}</th>
            <th>{t('Table.number')}</th>
            <th>
              <button type="button" value={'signup_date'} onClick={sortHandler}>
                {t('Table.signup_date')} <UpDownArrowsIcon />
              </button>
            </th>
            <th>
              <button type="button" value={'sells'} onClick={sortHandler}>
                {t('Table.sells')}
                <UpDownArrowsIcon />
              </button>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersLoading && (
            <tr>
              <td className={s.loading}>Loading...</td>
            </tr>
          )}
          {!usersLoading &&
            users.map((user) => (
              <tr key={user.id}>
                <td className={s.checkbox}>
                  <input
                    type="checkbox"
                    checked={selectedUsersIds.includes(user.id)}
                    value={user.id}
                    onChange={checkboxHandler}
                  />
                </td>
                <td className={s.user_name}>
                  <div className={s.image}>
                    {user.avatarURL ? (
                      <Image
                        src={user.avatarURL}
                        width={48}
                        height={48}
                        alt={user.userName}
                      />
                    ) : (
                      user.userName[0].toUpperCase()
                    )}
                  </div>
                  <div>
                    <h5>{user.userName}</h5>
                    <span>{user.email}</span>
                  </div>
                </td>
                <td>{user.address.phoneNumber}</td>
                <td>{user.emailConfirmDate}</td>
                <td>
                  {user.sells.quantity}
                  <br />
                  (${costWithCoins(user.sells.sum)})
                </td>
                <td>
                  <button
                    type="button"
                    className={user.banned ? s.banned : s.not_banned}
                    onClick={() => banHandler(user)}
                  >
                    –
                  </button>
                </td>
                <td className={s.link}>
                  <ArrowRight />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className={s.pagination}>
        <span>
          {filteredUsers.length ? startIdx + 1 : 0}-{endIdx} {t('Table.of')}{' '}
          {filteredUsers.length}
        </span>
        {/* <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          previousLabel={<ArrowLeft />}
          nextLabel={<ArrowRight />}
          breakLabel="..."
          initialPage={page - 1}
          onPageChange={onPageChange}
          renderOnZeroPageCount={null}
        /> */}
        {/* <Pagination
          activePage={page}
          itemsCountPerPage={perPage}
          totalItemsCount={filteredUsers.length}
          pageRangeDisplayed={3}
          activeLinkClass="selected"
          prevPageText={<ArrowLeft />}
          nextPageText={<ArrowRight />}
          firstPageText={1}
          lastPageText={pageCount}
          onChange={onPageChange.bind(this)}
        /> */}
        <ul className={s.pages}>
          <li>
            <button
              type="button"
              onClick={() => page > 1 && onPageChange(page - 1)}
              disabled={page === 1}
            >
              <ArrowLeft />
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => onPageChange(1)}
              style={{
                backgroundColor:
                  page === 1 ? 'var(--blue-pale)' : 'transparent',
              }}
            >
              1
            </button>
          </li>
          {pageCount >= 3 && page <= 4 && (
            <li>
              <button
                type="button"
                onClick={() => onPageChange(2)}
                style={{
                  backgroundColor:
                    page === 2 ? 'var(--blue-pale)' : 'transparent',
                }}
              >
                2
              </button>
            </li>
          )}
          {pageCount >= 5 && page <= 4 && (
            <li>
              <button
                type="button"
                onClick={() => onPageChange(3)}
                style={{
                  backgroundColor:
                    page === 3 ? 'var(--blue-pale)' : 'transparent',
                }}
              >
                3
              </button>
            </li>
          )}

          {page >= 5 && (
            <li className="break-left">
              <button type="button" onClick={() => onPageChange(page - 2)}>
                ...
              </button>
            </li>
          )}

          {page >= 5 && page <= pageCount - 2 && (
            <li>
              <button type="button" onClick={() => onPageChange(page - 1)}>
                {page - 1}
              </button>
            </li>
          )}
          {page >= 4 && page <= pageCount - 3 && (
            <li>
              <button
                type="button"
                onClick={() => onPageChange(page)}
                style={{ backgroundColor: 'var(--blue-pale)' }}
              >
                {page}
              </button>
            </li>
          )}
          {page >= 3 && page <= pageCount - 4 && (
            <li>
              <button type="button" onClick={() => onPageChange(page + 1)}>
                {page + 1}
              </button>
            </li>
          )}

          {page <= pageCount - 4 && (
            <li className="break-right">
              <button type="button" onClick={() => onPageChange(page + 2)}>
                ...
              </button>
            </li>
          )}

          {pageCount >= 6 && page >= pageCount - 3 && (
            <li>
              <button
                type="button"
                onClick={() => onPageChange(pageCount - 2)}
                style={{
                  backgroundColor:
                    page === pageCount - 2 ? 'var(--blue-pale)' : 'transparent',
                }}
              >
                {pageCount - 2}
              </button>
            </li>
          )}
          {pageCount >= 4 && page >= pageCount - 3 && (
            <li>
              <button
                type="button"
                onClick={() => onPageChange(pageCount - 1)}
                style={{
                  backgroundColor:
                    page === pageCount - 1 ? 'var(--blue-pale)' : 'transparent',
                }}
              >
                {pageCount - 1}
              </button>
            </li>
          )}
          {pageCount >= 2 && (
            <li>
              <button
                type="button"
                onClick={() => onPageChange(pageCount)}
                style={{
                  backgroundColor:
                    page === pageCount ? 'var(--blue-pale)' : 'transparent',
                }}
              >
                {pageCount}
              </button>
            </li>
          )}
          <li>
            <button
              type="button"
              onClick={() => page < pageCount && onPageChange(page + 1)}
              disabled={page === pageCount}
            >
              <ArrowRight />
            </button>
          </li>
        </ul>
      </div>
      <BanSellerModal
        isOpen={isModalOpened}
        closeModal={() => setIsModalOpened(false)}
        user={userToBan}
        setUsers={setUsers}
      />
    </div>
  );
};
