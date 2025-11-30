import type { FC, JSX } from "react";

const HeroContent: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-4.5 text-text">
      <div className="max-w-[780px] flex flex-col gap-1.25 md:gap-2 xl:gap-3.75">
        <h1 className="text-2xl font-bold sx:text-[32px] md:text-[38px] xl:text-[42px]">
          Мы — лидеры рынка России по строительству деревянных домов
        </h1>
        <p className="text-sm font-medium sx:text-base xl:text-lg">
          Сами заготавливаем северный лес в Архангельской области, а потом
          строим дом «под ключ». Построили 302 дома за 2024 год. Всего же за 26
          лет построили свыше 5000 домов.
        </p>
      </div>
      <div className="flex flex-col sx:flex-row lg:flex-col gap-2.5">
        <button
          type="button"
          className="w-full md:w-[328px] h-13 sx:h-[60px] bg-primary font-medium rounded-full text-bg"
        >
          Рассчитать стоимость дома
        </button>
        <div className="flex flex-col gap-1.75 w-full md:w-[328px]">
          <button
            type="button"
            className="h-13 sx:h-[60px] font-medium border border-border rounded-full"
          >
            Задать вопрос в WhatsApp
          </button>
          <span className="text-center text-sm text-text/50">
            Ответим в течение 10 минут
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
