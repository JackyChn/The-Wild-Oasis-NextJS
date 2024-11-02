import UpdateReservationForm from "@/app/_components/UpdateReservationForm";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const reservationId = params.bookingId;
  const reservation = await getBooking(reservationId);
  const numGuests = await reservation.numGuests;
  const observations = await reservation.observations;
  const cabinId = await reservation.cabinId;
  const cabin = await getCabin(cabinId);
  const maxCapacity = await cabin.maxCapacity;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <UpdateReservationForm
        numGuests={numGuests}
        observations={observations}
        maxCapacity={maxCapacity}
        reservationId={reservationId}
      />
    </div>
  );
}
