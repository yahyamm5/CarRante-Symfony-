<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\CarRepository;
use App\Repository\LeaseAgreementRepository;
use App\Repository\CustomerRepository;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Car;
use App\Entity\Customer;
use App\Entity\LeaseAgreement;

final class LeaseAgreementController extends AbstractController {

    #[Route('/newLeaseAgreement', name: "create_leaseAgreement", methods:['POST'])]
    public function CreateleaseAgreement(
        Request $request,
        EntityManagerInterface $entityManager,
        ValidatorInterface $validator,
        CarRepository $carRepository,
        CustomerRepository $customerRepository
        ): Response {
            $data = json_decode($request->getContent(), true);
            $leaseAgreement = new LeaseAgreement();
            
            
            $carName = $data['car_name'] ?? null;
            $customerName = $data['customer_name'] ?? null;
            
            if (!$carName || !$customerName) {
                return new Response("Car or Customer not selected", 404);
            }
            
            if($carName && $customerName) {
                $car = $carRepository->findOneBy(['brand' => $carName]);
                $customer = $customerRepository->findOneBy(['name' => $customerName]);
                $leaseAgreement->setCustomer($customer);
                $car->setStatus("Rented");
                $leaseAgreement->setCar($car);
            }
            $leaseAgreement->setTotalPrice($data['TotalPrice'] ?? 0);
            $leaseAgreement->setStartDate($data['StartDate'] ?? null);
            $leaseAgreement->setEndDate($data['EndDate'] ?? null);
            $leaseAgreement->setStatus($data['Status'] ?? 'pending');
            $entityManager->persist($leaseAgreement);
            $entityManager->flush();
            
            return new Response("Saved new lease agreement with id: " . $leaseAgreement->getId(), 201);
        }


    #[Route('/LeaseAgreement/delete/{lease_id}', name: "delete_leaseAgreement", methods:['POST'])]
    public function delete_LeaseAgreement(EntityManagerInterface $entityManager,int $lease_id): Response {

        $leaseAgreement = $entityManager->getRepository(LeaseAgreement::class)->find($lease_id);
        if(!$leaseAgreement){
            throw $this->createNotFoundException('No LeaseAgreement found for id : '.$lease_id);
        }

        $car = $leaseAgreement->getCar();
        if ($car) {
            $car->setStatus('Available');
            $entityManager->persist($car);
        }

        $entityManager->remove($leaseAgreement);
        $entityManager->flush();
        
        return new Response("deleted LeaseAgreement with the id : ".$leaseAgreement->getId(), 201);
    }

    #[Route("/LeaseAgreement/allLeaseAgreement", name: "LeaseAgreement_list", methods: ['GET'])]
    public function display(LeaseAgreementRepository $repository): Response {

        $LeaseAgreements = $repository->findAll();

        $data = [];
        foreach ($LeaseAgreements as $LeaseAgreement) {

            $data[] = [
                'id' => $LeaseAgreement->getId(),
                'StartDate' => $LeaseAgreement->getStartDate(),
                'EndDate' => $LeaseAgreement->getEndDate(),
                'TotalPrice' => $LeaseAgreement->getTotalPrice(),
                'brand' => $LeaseAgreement->getCar() ? $LeaseAgreement->getCar()->getBrand() : 'Unknown',
                'name' => $LeaseAgreement->getCustomer() ? $LeaseAgreement->getCustomer()->getName() : 'Unknown',
                'Status' => $LeaseAgreement->getStatus(),
        ];
    } 
    return $this->json($data);
    }


}