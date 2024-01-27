-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercize" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "times" INTEGER NOT NULL,
    "icon_path" TEXT NOT NULL,

    CONSTRAINT "Exercize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ExercizeToWorkout" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ExercizeToWorkout_AB_unique" ON "_ExercizeToWorkout"("A", "B");

-- CreateIndex
CREATE INDEX "_ExercizeToWorkout_B_index" ON "_ExercizeToWorkout"("B");

-- AddForeignKey
ALTER TABLE "_ExercizeToWorkout" ADD CONSTRAINT "_ExercizeToWorkout_A_fkey" FOREIGN KEY ("A") REFERENCES "Exercize"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExercizeToWorkout" ADD CONSTRAINT "_ExercizeToWorkout_B_fkey" FOREIGN KEY ("B") REFERENCES "Workout"("id") ON DELETE CASCADE ON UPDATE CASCADE;
